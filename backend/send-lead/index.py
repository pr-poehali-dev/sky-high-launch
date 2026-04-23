import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в сообщения сообщества ВКонтакте conceptstudi"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    token = os.environ['VK_API_TOKEN']

    text = (
        f"📋 Новая заявка с сайта!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"💬 Сообщение: {message if message else '—'}"
    )

    params = urllib.parse.urlencode({
        'user_id': 0,
        'random_id': 0,
        'peer_id': -226924063,
        'message': text,
        'access_token': token,
        'v': '5.199'
    })

    req = urllib.request.Request(
        f'https://api.vk.com/method/messages.send?{params}',
        method='POST'
    )
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode())

    if 'error' in result:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': result['error'].get('error_msg', 'Ошибка ВК')})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }

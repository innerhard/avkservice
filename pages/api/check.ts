import { NextApiRequest, NextApiResponse } from 'next'

const TelegramApi = require('node-telegram-bot-api')

const token = '2121760560:AAG6pHQ06pD3uWHS2YW225mdJ7FxosBuPgU'
const bot = new TelegramApi(token, { polling: true })


export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    // res.json({ hello: 'world', method: req.method }
    bot.on('message', (msg: any) => {
        bot.sendMessage(470920445, `${req.body.name}`)
    })
    res.status(200).json({result: 'ok'})
}
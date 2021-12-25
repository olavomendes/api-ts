import winston from 'winston';

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.File({
            filename: 'src/logs/logs.log',
            level: 'debug',
        }),
    ],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.simple(),
    ),
});

export default logger;

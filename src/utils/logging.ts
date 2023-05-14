import {createLogger, transports, format} from 'winston';

const formatLogs = (log: any): string => 
    `${log.label} ${log.module?`[\x1b[35m${log.module}\x1b[0m]`:''}[${log.level}]: ${log.message}`;

const logger = createLogger({
    silent: false,
    transports: [
        new transports.Console({
            level: "info",
            format: format.combine(
                format.label({ label: "[EXPRESS]" }),
                format.colorize({ all: true }),
                format.printf(formatLogs)
            )
        })
    ]
})

export default logger;
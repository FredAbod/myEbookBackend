import pino from "pino";

const logger = pino({
  enabled: true,
  level: "info",
  transport: {
    target: "pino-pretty", // Ensure this target is correct and installed
    options: {
      colorize: true,
      translateTime: true,
      ignore: "pid,hostname",
    },
  },
});

export default logger;

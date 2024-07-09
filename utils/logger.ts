import chalk from "chalk";

// Function to log messages to the console
/**
 * Logs a message and outputs an object.
 *
 * @param $message - The message to be logged.
 * @param $output - The object to be outputted.
 * @returns The logger object.
 */
export function logme($message: any, $output: object): any {
    const tChalk = chalk.hex("#F37322").bold;
    const tttLogger = console.log(
        tChalk("\n TAECHO TECH TRIO //") + " " + $message + "\n",
        $output,
        "\n"
    );

    return tttLogger;
}

import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CustomError } from "../shared/customError";
import { HttpClient } from "../shared/httpClient";
import { validateInput } from "../shared/validateInput";
import { schema } from "./schema";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.')

    try {
        await validateInput(schema, req)

        const client = new HttpClient()
        await client.createLead(req.body)

        context.res = {
            status: 201,
            body: {
                success: true,
                message: 'Lead created successfully'
            }
        };
    } catch (error) {
        console.log(typeof error)
        if (error instanceof CustomError) {
            context.res = {
                status: error.statusCode,
                body: {
                    success: false,
                    message: error.message,
                    errors: error.errors,
                }
            };
        } else {
            context.res = {
                status: 500,
                body: {
                    success: false,
                    message: 'Something went wrong, please try again later',
                    errors: [error]
                }
            };
        }
    }

};

export default httpTrigger;
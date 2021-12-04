import * as Joi from "joi"
import { RequestSchema } from "../shared/validateInput"

export const schema: RequestSchema = {
  body: Joi.object({
    company: Joi.string().required().min(1).max(200),
    firstName: Joi.string().required().min(1).max(40),
    lastName: Joi.string().required().min(1).max(80),
    email: Joi.string().email().required().max(100),
    website: Joi.string().max(255),
    leadSource: Joi.string().required().valid(
      'Advertisement',
      'Cold Call',
      'Employee Referral',
      'External Referral',
      'Twitter',
      'Facebook',
      'LinkedIn',
      'Google',
    ),
    emailOptOut: Joi.boolean().required(),
  })
}
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from "axios"
import * as FormData from "form-data"

export type CreateLead = {
  company: string
  firstName: string
  lastName: string
  email: string
  website?: string
  leadSource: string
  emailOptOut: boolean
}

export class HttpClient {
  private client: AxiosInstance

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: 'https://crm.zoho.com/crm',
      headers: {
        'Accept': 'application/json',
      }
    }
    this.client = axios.create(config)
  }

  // Returns Form Data from the data received.
  formData = (data: CreateLead) => {
    const bodyFormData = new FormData();
    bodyFormData.append("Company", data.company)
    bodyFormData.append("First Name", data.firstName)
    bodyFormData.append("Last Name", data.lastName)
    bodyFormData.append("Email", data.email)
    bodyFormData.append("Website", data.website)
    bodyFormData.append("Lead Source", data.leadSource)
    data.emailOptOut && bodyFormData.append("Email Opt Out", 'on')

    // Do not edit or remove the code below 
    bodyFormData.append("zc_gad", '')
    bodyFormData.append("xnQsjsdp", 'f3f1e1cb12f1be923f9d06a34b78e84c05520449552fe4dfbe8964b4dbb20760')
    bodyFormData.append("actionType", 'TGVhZHM=')
    bodyFormData.append("xmIwtLD", '791c32cf6bacf8911263884c27bd7c746eb1bf400bc1f9dddf149e695879ad7a')
    bodyFormData.append("returnURL", 'https://iphupha.co.za/')

    return bodyFormData
  }

  createLead = async (data: CreateLead) => {
    const formData = this.formData(data)
    this.setHeaders(formData.getHeaders())
    await this.client.post(
      '/WebToLeadForm',
      formData.getBuffer(),
    )
  }

  setHeaders = (headers: AxiosRequestHeaders) => this.client.interceptors.request.use(
    (config) => ({
      ...config,
      headers: {
        ...config.headers,
        ...headers
      },
    }),
    function (error) {
      return Promise.reject(error);
    }
  )
}

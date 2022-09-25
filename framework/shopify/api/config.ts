import { ApiConfig } from "@/framework/common/types/api"
import { fetchApi } from "../utils"

class Config {
  private config: ApiConfig

  constructor(config: any) {
    this.config = config
  }

  getConfig(): any {
    return this.config
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchApi
})



export const getConfig = () => {
  return configWrapper.getConfig()
}
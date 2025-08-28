import { HttpError } from "../errors/HttpError";
import { CampaignsRepository } from "../repositories/CampaignsRepository";

interface CreateCampaignParams {
    name: string
    description: string
    startDate: Date
    endDate?: Date
}

export class CampaignsService {
    constructor(private readonly campaignsRepository: CampaignsRepository) { }
    async getAllCampaigns() {
        const campaigns = await this.campaignsRepository.find()
        return campaigns
    }
    
    async getCampaignById(campaignId: number) {
        const campaign = await this.campaignsRepository.findById(campaignId) 
        if(!campaign) throw new HttpError(404, "campanha não encontrada")
        return campaign
    }

    async createCampaign(params: CreateCampaignParams) {
        const newCampaign = await this.campaignsRepository.create(params)
        return newCampaign
    }

    async updateCampaign(campaignId: number, params: Partial<CreateCampaignParams>) {
        const updatedCampaign = await this.campaignsRepository.updateById(campaignId, params)    
        if(!updatedCampaign) throw new HttpError(404, "campanha não encontrada")
        return updatedCampaign
    }

    async deletedCampaign(campaignId: number) {
        const deletedCampaign = await this.campaignsRepository.deleteById(campaignId)
        if (!deletedCampaign) throw new HttpError(404, "campanha não encontrada")
        return deletedCampaign
    }
}
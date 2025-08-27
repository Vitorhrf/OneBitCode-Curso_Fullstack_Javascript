import { Handler } from "express";
import { HttpError } from "../errors/HttpError";
import { CreateCampaignRequestSchema, UpdateCampaignRequestSchema } from "./schemas/CampaignsRequestSchema";
import { CampaignsRepository } from "../repositories/CampaignsRepository";


export class CampaignsController {
    constructor(private readonly campaignsRepository: CampaignsRepository) { }
    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await this.campaignsRepository.find()
            res.json(campaigns)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const campaign = await this.campaignsRepository.findById(Number(req.params.id)) 
            if(!campaign) throw new HttpError(404, "campanha não encontrada")
            res.json(campaign)
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateCampaignRequestSchema.parse(req.body)
            const newCampaign = await this.campaignsRepository.create(body)
            res.status(201).json(newCampaign)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const body = UpdateCampaignRequestSchema.parse(req.body)
            const updatedCampaign = await this.campaignsRepository.updateById(Number(req.params.id), body)
            
            if(!updatedCampaign) throw new HttpError(404, "campanha não encontrada")
            
            res.json(updatedCampaign)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const deletedCampaign = await this.campaignsRepository.deleteById(Number(req.params.id))
            if (!deletedCampaign) throw new HttpError(404, "campanha não encontrada")
            
            res.json({ deletedCampaign: deletedCampaign })
        } catch (error) {
            next(error)
        }
    }
    
}
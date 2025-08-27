import { Handler } from "express";
import { AddLeadRequestSchema, GetCampaignLeadsRequestSchema, UpdateLeadStatusRequestSchema } from "./schemas/CampaignsRequestSchema";
import { CampaignsRepository } from "../repositories/CampaignsRepository";
import { LeadsRepository, LeadWhereParams } from "../repositories/LeadsRepository";

export class CampaignLeadsController {
    constructor(
        private readonly campaignsRepository: CampaignsRepository,
        private readonly leadsRepository: LeadsRepository
    ) { }
    getLeads: Handler = async (req, res, next) => {
        try {
            const query = GetCampaignLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query

            const limit = Number(pageSize)
            const offset = (Number(page) - 1) * limit

            const where: LeadWhereParams = { campaignId: Number(req.params.campaignId) }

            if (name) where.name = { like: name, mode: "insensitive" }
            if (status) where.campaignStatus = status

            const leads = await this.leadsRepository.find({ 
                where, 
                sortBy, 
                order, 
                limit,
                offset,
                include: { campaigns: true }
            })

            const total = await this.leadsRepository.count(where)
            
            res.json({
                leads,
                meta: {
                    page: Number(page),
                    pageSize: limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            })
        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const body = AddLeadRequestSchema.parse(req.body)
            const newLeadCampaign = await this.campaignsRepository.addLead(Number(req.params.campaignId), body.leadId, body.status)
            res.status(201).json({ newLeadCampaign: newLeadCampaign })
        } catch (error) {
            next(error)
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const { status } = UpdateLeadStatusRequestSchema.parse(req.body)
            const updatedLeadCampaign = await this.campaignsRepository.updateStatus(Number(req.params.campaignId), Number(req.params.leadId), status)
            res.json(updatedLeadCampaign)
        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const removedLead = await this.campaignsRepository.removeLead(Number(req.params.campaignId), Number(req.params.leadId))
            res.json({ removedLead: removedLead })
        } catch (error) {
            next(error)
        }
    }
}
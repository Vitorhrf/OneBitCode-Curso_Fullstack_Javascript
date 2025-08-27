import { Campaign, LeadCampaign } from "@prisma/client";
import { CampaignsRepository, CreateCampaignAttributes } from "../CampaignsRepository";
import { prisma } from "../../database";
import { CampaignStatus } from "../LeadsRepository";

export class PrismaCampaignsRepository implements CampaignsRepository {
    find(): Promise<Campaign[]> {
        return prisma.campaign.findMany()
    }

    findById(id: number): Promise<Campaign | null> {
        return prisma.campaign.findUnique({ 
            where: { id },
            include: { 
                leads: {
                    include: {
                        lead: true
                    }
                }
            } 
        })
    }

    create(attributes: CreateCampaignAttributes): Promise<Campaign> {
        return prisma.campaign.create({ data: attributes })
    }

    updateById(id: number, attributes: Partial<CreateCampaignAttributes>): Promise<Campaign | null> {
        return prisma.campaign.update({
            where: { id },
            data: attributes
        })
    }

    deleteById(id: number): Promise<Campaign | null> {
        return prisma.campaign.delete({ where: { id }})
    }

    addLead(campaignId: number, leadId: number, status?: CampaignStatus): Promise<LeadCampaign> {
        return prisma.leadCampaign.create({
            data: { leadId, campaignId, status }
        })
    }

    updateStatus(campaignId: number, leadId: number, status: CampaignStatus): Promise<LeadCampaign> {
        return prisma.leadCampaign.update({
            data: { status },
            where: {
                leadId_campaignId: {
                    campaignId, leadId
                }
            }
        })
    }

    removeLead(campaignId: number, leadId: number): Promise<LeadCampaign> {
        return prisma.leadCampaign.delete({
            where: {
                leadId_campaignId: {
                    leadId, campaignId
                }
            }
        })
    }
}
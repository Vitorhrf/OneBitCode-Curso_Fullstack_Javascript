import { Lead } from "@prisma/client";

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Unresponsive" | "Disqualified" | "Archived"
export type CampaignStatus =  "New" | "Engaged" | "FollowUp_Scheduled" | "Contacted" | "Qualified" | "Converted" | "Unresponsive" | "Disqualified" | "Re_Engaged" | "Opted_Out"

export interface LeadWhereParams {
    name?: {
        like?: string
        equals?: string
        mode?: "default" | "insensitive"
    }
    campaignStatus?: CampaignStatus
    status?: LeadStatus
    groupId?: number
    campaignId?: number
}

export interface FindLeadsParams {
    where?: LeadWhereParams
    sortBy?: "name" | "status" | "createdAt" | "id"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
    include?: {
        groups?: boolean
        campaigns?: boolean
    }
}

export interface CreateLeadAttributes {
    name: string
    email: string
    phone: string
    status?: LeadStatus
}

export interface LeadsRepository {
    find: (params: FindLeadsParams) => Promise<Lead[]>
    findById: (id: number) => Promise<Lead | null>
    create: (attributes: CreateLeadAttributes) => Promise<Lead>
    count: (where: LeadWhereParams) => Promise<number> 
    updateById: (id: number, attributes: Partial<CreateLeadAttributes>) => Promise<Lead | null>
    deleteById: (id: number) => Promise<Lead | null>
}
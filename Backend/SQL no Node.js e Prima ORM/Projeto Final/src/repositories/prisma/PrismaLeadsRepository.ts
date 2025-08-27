import { Lead } from "@prisma/client";
import { CreateLeadAttributes, FindLeadsParams, LeadsRepository, LeadWhereParams } from "../LeadsRepository";
import { prisma } from "../../database";

export class PrismaLeadsRepository implements LeadsRepository{
    async find(params: FindLeadsParams): Promise<Lead[]> {
        return prisma.lead.findMany({
            where: {
                name: {
                    contains: params.where?.name?.like,
                    equals: params.where?.name?.equals,
                    mode: params.where?.name?.mode
                },
                status: params.where?.status,

                campaigns: params.where?.campaignStatus || params.where?.campaignId 
                    ? { some: {
                        status: params.where?.campaignStatus,
                        campaignId: params.where?.campaignId
                    }} 
                    : undefined,

                groups: params.where?.groupId 
                ? { some: { 
                        id: params.where?.groupId 
                    }} 
                    : undefined
            },
            orderBy: { [params.sortBy ?? "name"]: params.order},
            skip: params.offset,
            take: params.limit,
            include: {
                groups: params.include?.groups,
                campaigns: params.include?.campaigns
            }
        })
    }

    async findById(id: number): Promise<Lead | null> {
        return prisma.lead.findUnique({
            where: { id },
            include: {
                campaigns: true,
                groups: true
            }
        })
    }

    async create(attributes: CreateLeadAttributes): Promise<Lead> {
        return prisma.lead.create({ data: attributes })
    }

    async count(where: LeadWhereParams): Promise<number> {
        return prisma.lead.count({
           where: {
                name: {
                    contains: where?.name?.like,
                    equals: where?.name?.equals,
                    mode: where?.name?.mode
                },
                status: where?.status,

                campaigns: where?.campaignStatus || where?.campaignId 
                    ? { some: {
                        status: where?.campaignStatus,
                        campaignId: where?.campaignId
                    }} 
                    : undefined,

                groups: where?.groupId 
                ? { some: { 
                        id: where?.groupId 
                    }} 
                    : undefined
            }
        })
    }

    async updateById(id: number, attributes: Partial<CreateLeadAttributes>): Promise<Lead> {
        
        return prisma.lead.update({
            where: { id },
            data: attributes
        })
    }

    async deleteById(id: number): Promise<Lead> {
        return prisma.lead.delete({ where: { id }})
    }
    
}
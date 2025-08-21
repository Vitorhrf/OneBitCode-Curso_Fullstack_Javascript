import { Handler } from "express";
import { prisma } from "../database";
import { Prisma } from "@prisma/client";
import { GetGroupLeadsRequestSchema } from "./schemas/GroupsRequestSchema";

export class GroupLeadsController {
    getLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetGroupLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadWhereInput = {
                groups: { 
                    some: { id: groupId }    
                }
            }

            if (name) where.name = { contains: name, mode: "insensitive" }
            if (status) where.status = status

            const leads = await prisma.lead.findMany({
                where,
                orderBy: {[sortBy]: order},
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: { groups: true }
            })

            const total = await prisma.lead.count({ where })
            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
                }
            })
        } catch (error) {
            next(error)
        }
    }
    
    addLead: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)
            const group = await prisma.group.update({
                where: { id: groupId },
                data: {
                    leads: {
                        connect: { id: leadId }
                    }
                },
                include: {
                    leads: true
                }
            })
            res.status(201).json(group)
        } catch (error) {
            next(error)
        }
    }
    
    removeLead: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)
            const group = await prisma.group.update({
                where: { id: groupId },
                data: {
                    leads: {
                        disconnect: { id: leadId }
                    }
                },
                include: {
                    leads: true
                }
            })
            res.json(group)
        } catch (error) {
            next(error)
        }
    }
    
}
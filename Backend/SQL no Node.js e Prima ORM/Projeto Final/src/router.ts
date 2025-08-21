import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";
import { LeadsController } from "./controllers/LeadsController.js";
import { GroupsController } from "./controllers/GroupsController.js";
import { CampaignsController } from "./controllers/CampaignsController.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController.js";
import { GroupLeadsController } from "./controllers/GroupLeadsController.js";

const router = Router()

const leadsController = new LeadsController()
const groupsController = new GroupsController()
const groupLeadsController = new GroupLeadsController()
const campaignsController = new CampaignsController()
const campaignLeadController = new CampaignLeadsController()

router.get("/leads", leadsController.index)
router.post("/leads", leadsController.create)
router.get("/leads/:id", leadsController.show)
router.put("/leads/:id", leadsController.update)
router.delete("/leads/:id", leadsController.delete)

router.get("/groups", groupsController.index)
router.get("/groups/:id", groupsController.show)
router.post("/groups", groupsController.create)
router.put("/groups/:id", groupsController.update)
router.delete("/groups/:id", groupsController.delete)

router.get("/groups/:groupId/leads", groupLeadsController.getLeads)
router.post("/groups/:groupId/leads/:leadId", groupLeadsController.addLead)
router.delete("/groups/:groupId/leads/:leadId", groupLeadsController.removeLead)

router.get("/campaigns", campaignsController.index)
router.get("/campaigns/:id", campaignsController.show)
router.post("/campaigns", campaignsController.create)
router.put("/campaigns/:id", campaignsController.update)
router.delete("/campaigns/:id", campaignsController.delete)

router.get("/campaigns/:campaignId/leads", campaignLeadController.getLeads)
router.post("/campaigns/:campaignId/leads", campaignLeadController.addLead)
router.put("/campaigns/:campaignId/leads/:leadId", campaignLeadController.updateLeadStatus)
router.delete("/campaigns/:campaignId/leads/:leadId", campaignLeadController.removeLead)

router.get("/status", (req, res, next) => {
    try {
        throw new HttpError(401, "não autorizado")
        res.json({ message: "OK" })
    } catch (error) {
        next(error)
    }
    
})

export { router }
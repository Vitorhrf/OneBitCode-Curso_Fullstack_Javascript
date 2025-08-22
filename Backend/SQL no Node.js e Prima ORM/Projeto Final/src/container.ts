import { LeadsController } from "./controllers/LeadsController.js";
import { GroupsController } from "./controllers/GroupsController.js";
import { CampaignsController } from "./controllers/CampaignsController.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController.js";
import { GroupLeadsController } from "./controllers/GroupLeadsController.js";
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository.js";

export const leadsRepository = new PrismaLeadsRepository()

export const leadsController = new LeadsController(leadsRepository)
export const groupsController = new GroupsController()
export const groupLeadsController = new GroupLeadsController()
export const campaignsController = new CampaignsController()
export const campaignLeadController = new CampaignLeadsController()
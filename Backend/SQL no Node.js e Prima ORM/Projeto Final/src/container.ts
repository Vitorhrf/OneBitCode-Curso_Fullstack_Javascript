import { LeadsController } from "./controllers/LeadsController.js";
import { GroupsController } from "./controllers/GroupsController.js";
import { CampaignsController } from "./controllers/CampaignsController.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController.js";
import { GroupLeadsController } from "./controllers/GroupLeadsController.js";
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository.js";
import { PrismaGroupsRepository } from "./repositories/prisma/PrismaGroupsRepository.js";
import { PrismaCampaignsRepository } from "./repositories/prisma/PrismaCampaignRepository.js";

export const leadsRepository = new PrismaLeadsRepository()
export const groupsRepository = new PrismaGroupsRepository()
export const campaignsRepository = new PrismaCampaignsRepository()

export const leadsController = new LeadsController(leadsRepository)
export const groupsController = new GroupsController(groupsRepository)
export const groupLeadsController = new GroupLeadsController(groupsRepository, leadsRepository)
export const campaignsController = new CampaignsController(campaignsRepository)
export const campaignLeadController = new CampaignLeadsController(campaignsRepository, leadsRepository)
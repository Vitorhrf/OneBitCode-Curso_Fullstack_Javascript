import { LeadsController } from "./controllers/LeadsController.js";
import { GroupsController } from "./controllers/GroupsController.js";
import { CampaignsController } from "./controllers/CampaignsController.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController.js";
import { GroupLeadsController } from "./controllers/GroupLeadsController.js";
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository.js";
import { PrismaGroupsRepository } from "./repositories/prisma/PrismaGroupsRepository.js";
import { PrismaCampaignsRepository } from "./repositories/prisma/PrismaCampaignRepository.js";
import { LeadsService } from "./services/LeadsService.js";
import { GroupsService } from "./services/GroupsService.js";
import { CampaignsService } from "./services/CampaignsService.js";

export const leadsRepository = new PrismaLeadsRepository()
export const groupsRepository = new PrismaGroupsRepository()
export const campaignsRepository = new PrismaCampaignsRepository()

export const leadsService = new LeadsService(leadsRepository)
export const groupsService = new GroupsService(groupsRepository)
export const campaignsService = new CampaignsService(campaignsRepository)

export const leadsController = new LeadsController(leadsService)
export const groupsController = new GroupsController(groupsService)
export const groupLeadsController = new GroupLeadsController(groupsRepository, leadsRepository)
export const campaignsController = new CampaignsController(campaignsService)
export const campaignLeadController = new CampaignLeadsController(campaignsRepository, leadsRepository)
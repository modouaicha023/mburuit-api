import { BakerSchema } from './baker.schema';

BakerSchema.index({ companyId: 1, managerId: 1, name: 1 }, { unique: true });

import mongoose, { Schema } from 'mongoose'
import { IData } from '@/types'

const DataSchema = new Schema<IData>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  aboutText: { type: String, required: true },
  projects: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      projectImg: { type: String, required: true },
      tech: { type: [String], required: true },
      links: {
        live: { type: String, required: true },
        code: { type: String, required: true },
      },
    },
  ],
  workExp: [
    {
      role: { type: String, required: true },
      company: { type: String, required: true },
      description: { type: [String], required: true },
    },
  ],
  skills: [
    {
      skill: { type: String, required: true },
      skillIcon: { type: String, required: true },
    },
  ],
  socials: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
      socialIcon: { type: String, required: true },
    },
  ],
})

const DataModel =
  (mongoose.models.Data as mongoose.Model<IData>) ||
  mongoose.model<IData>('Data', DataSchema)

export default DataModel

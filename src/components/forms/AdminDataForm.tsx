'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/components/ui'
import { CustomFormField, Button } from '@/components'
import { dataSchema } from '@/schemas/data.schema'

const AdminDataForm = () => {
  const form = useForm<z.infer<typeof dataSchema>>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      name: '',
      role: '',
      aboutText: '',
      projects: [],
      workExp: [],
      skills: [],
      socials: [],
    },
  })

  const { control } = form

  // For handling dynamic fields
  const projectsArray = useFieldArray({ control, name: 'projects' })
  const workExpArray = useFieldArray({ control, name: 'workExp' })
  const skillsArray = useFieldArray({ control, name: 'skills' })
  const socialsArray = useFieldArray({ control, name: 'socials' })

  function onSubmit(values: z.infer<typeof dataSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Fields */}
        <div className="flex items-center justify-center gap-4">
          <CustomFormField
            control={control}
            name="name"
            label="Name"
            type="input"
          />
          <CustomFormField
            control={control}
            name="role"
            label="Role"
            type="input"
          />
        </div>
        <CustomFormField
          control={control}
          name="aboutText"
          label="About Text"
          type="textarea"
        />

        {/* Projects */}
        <div className="space-y-4">
          <h3 className="text-xl text-dark-200">Projects</h3>
          {projectsArray.fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-dark-500 rounded-lg p-6 space-y-4"
            >
              <CustomFormField
                control={control}
                name={`projects.${index}.title`}
                label={`Project ${index + 1} Title`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
              />
              <CustomFormField
                control={control}
                name={`projects.${index}.description`}
                label={`Project ${index + 1} Description`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
                type="textarea"
              />
              <CustomFormField
                control={control}
                name={`projects.${index}.imgUrl`}
                label={`Project ${index + 1} Image URL`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
              />
              {/* Links */}
              <div className="flex items-center justify-center gap-4">
                <CustomFormField
                  control={control}
                  name={`projects.${index}.links.live`}
                  label={`Project ${index + 1} Live Link`}
                  labelClass="text-base"
                  inputClass="!text-base py-2 px-4"
                />
                <CustomFormField
                  control={control}
                  name={`projects.${index}.links.code`}
                  label={`Project ${index + 1} Code Link`}
                  labelClass="text-base"
                  inputClass="!text-base py-2 px-4"
                />
              </div>
              <Button
                text="Remove Project"
                noGradient
                onClick={() => projectsArray.remove(index)}
                className="rounded-lg sm:px-4 sm:py-2 mt-4 bg-dark-500"
                textClassName="font-medium sm:text-sm"
              />
            </div>
          ))}
          <Button
            text="Add Project"
            className="rounded-lg sm:px-4 sm:py-2 bg-dark-500"
            textClassName="font-medium sm:text-sm"
            noGradient
            onClick={() =>
              projectsArray.append({
                id: '',
                title: '',
                description: '',
                imgUrl: '',
                tech: '',
                links: { live: '', code: '' },
              })
            }
          />
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h3 className="text-xl text-dark-200">Work Experience</h3>
          {workExpArray.fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-dark-500 rounded-lg p-6 space-y-4"
            >
              <div className="flex items-center justify-center gap-4">
                <CustomFormField
                  control={control}
                  name={`workExp.${index}.role`}
                  label={`Work Experience ${index + 1} Role`}
                  labelClass="text-base"
                  inputClass="!text-base py-2 px-4"
                />
                <CustomFormField
                  control={control}
                  name={`workExp.${index}.company`}
                  label={`Work Experience ${index + 1} Company`}
                  labelClass="text-base"
                  inputClass="!text-base py-2 px-4"
                />
              </div>
              <CustomFormField
                control={control}
                name={`workExp.${index}.description`}
                label={`Work Experience ${
                  index + 1
                } Description (Semi colon separated)`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
                type="textarea"
              />
              <Button
                text="Remove Work Experience"
                onClick={() => workExpArray.remove(index)}
                className="rounded-lg sm:px-4 sm:py-2 bg-dark-500 mt-2"
                noGradient
                textClassName="font-medium sm:text-sm"
              />
            </div>
          ))}
          <Button
            text="Add Work Experience"
            className="rounded-lg sm:px-4 sm:py-2 bg-dark-500"
            textClassName="font-medium sm:text-sm"
            noGradient
            onClick={() =>
              workExpArray.append({
                id: '',
                role: '',
                company: '',
                description: '',
              })
            }
          />
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h3 className="text-xl text-dark-200">Skills</h3>
          {skillsArray.fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-dark-500 rounded-lg p-6 space-y-4"
            >
              <CustomFormField
                control={control}
                name={`skills.${index}.skill`}
                label={`Skill ${index + 1}`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
              />
              <CustomFormField
                control={control}
                name={`skills.${index}.iconUrl`}
                label={`Skill ${index + 1} Icon URL`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
              />
              <Button
                text="Remove Skill"
                onClick={() => skillsArray.remove(index)}
                noGradient
                className="rounded-lg sm:px-4 sm:py-2 bg-dark-500 mt-2"
                textClassName="font-medium sm:text-sm"
              />
            </div>
          ))}
          <Button
            text="Add Skill"
            className="rounded-lg sm:px-4 sm:py-2 bg-dark-500"
            textClassName="font-medium sm:text-sm"
            noGradient
            onClick={() =>
              skillsArray.append({
                skill: '',
                iconUrl: '',
              })
            }
          />
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-xl text-dark-200">Social Links</h3>
          {socialsArray.fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-dark-500 rounded-lg p-6 space-y-4"
            >
              <CustomFormField
                control={control}
                name={`socials.${index}.name`}
                label={`Social ${index + 1} Name`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
              />
              <CustomFormField
                control={control}
                name={`socials.${index}.url`}
                label={`Social ${index + 1} URL`}
                labelClass="text-base"
                inputClass="!text-base py-2 px-4"
              />
              <Button
                text="Remove Social Link"
                onClick={() => socialsArray.remove(index)}
                noGradient
                className="rounded-lg sm:px-4 sm:py-2 bg-dark-500 mt-2"
                textClassName="font-medium sm:text-sm"
              />
            </div>
          ))}
          <Button
            text="Add Social Link"
            className="rounded-lg sm:px-4 sm:py-2 bg-dark-500"
            textClassName="font-medium sm:text-sm"
            noGradient
            onClick={() =>
              socialsArray.append({
                name: '',
                url: '',
                iconUrl: '',
              })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-dark-500 text-lg px-4 py-2 rounded-lg w-full"
        >
          Submit
        </button>
      </form>
    </Form>
  )
}

export default AdminDataForm

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui'
import { ICustomFormField } from '@/types'
import clsx from 'clsx'
import { FileUploader, MarkdownEditor } from '@/components'

const CustomFormField = ({
  control,
  name,
  label,
  type = 'input',
  placeholder = '',
  labelClass = '',
  inputClass = '',
}: ICustomFormField) => {
  const renderField = (type: string, field: any) => {
    switch (type) {
      case 'input':
        return (
          <Input
            placeholder={placeholder}
            {...field}
            className={clsx(
              'border border-dark-500 bg-dark-500/20 !text-lg text-dark-200 py-6 px-4 rounded-lg',
              inputClass
            )}
          />
        )

      case 'textarea':
        return (
          <MarkdownEditor
            value={field.value || ''}
            onChange={field.onChange}
            className={inputClass}
          />
        )

      case 'file':
        return (
          <FileUploader
            file={field.value}
            onChange={(file) => field.onChange(file)}
          />
        )
    }
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className={clsx('text-xl text-dark-200', labelClass)}>
            {label}
          </FormLabel>
          <FormControl>{renderField(type, field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField

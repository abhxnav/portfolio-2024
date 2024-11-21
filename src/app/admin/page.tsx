import { AdminDataForm, IFrameComponent } from '@/components'
import { env } from '@/env'

const { baseUrl } = env

const Admin = () => {
  return (
    <div className="flex w-full min-h-screen relative z-50">
      <div className="w-screen h-screen absolute top-0 left-0 gradient-admin -z-50" />

      <div className="w-1/2 p-12 pr-0">
        <AdminDataForm />
      </div>
      <div className="w-1/2 h-screen p-8 sticky top-0 right-0">
        <div className="border-2 border-dark-500 size-full">
          <IFrameComponent src={baseUrl} title="Preview" />
        </div>
      </div>
    </div>
  )
}

export default Admin



interface IDashboardHead{
    children:React.ReactNode;
    pageTitle:string
}

const DashboarHead = (props:IDashboardHead) => {
    const {children, pageTitle}= props
  return (
    <div className="w-full flex flex-col px-0 py-1">
       <div className="w-full flex bg-blue-600 px-4 py-4 text-white space-y-6  border rounded">
        {pageTitle}
       </div>
       <div className="w-full bg-white  shodow-xl">
        {children}
       </div>
    </div>
  )
}

export default DashboarHead

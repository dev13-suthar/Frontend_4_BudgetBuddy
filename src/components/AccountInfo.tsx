import AccountCard from "./AccountCard"
import SpentByCategory from "./SpentByCategory"

const AccountInfo = () => {
  return (
    <div className='p-2 border border-pink-300 h-max'>
        <header>
            <p className="text-[16px]">Welcome User;</p>
        </header>
        {/* Account Card Here At Center */}
       <div className="flex flex-col items-center w-full mt-4 gap-5">
            <AccountCard/>
            <SpentByCategory/>
       </div>
    </div>
  )
}

export default AccountInfo
import AccountInfo from "./AccountInfo"
import Footer from "./Footer"
import RecentTransactions from "./RecentTransactions"


const HomePageLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-[80vh] sm:min-h-[90vh]">
      <div className="p-2 py-5 sm:px-10  grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
        <AccountInfo/>
        <RecentTransactions/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePageLayout
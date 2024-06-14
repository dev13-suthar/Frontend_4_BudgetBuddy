import { ResponsivePie } from "@nivo/pie";
import { Skeleton } from "./ui/skeleton";

type props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data:any,
    isLoading:boolean
}

const MyResponsivePie = ({ data,isLoading }:props) => {
    if(isLoading){
        return <>
        <div className="w-full h-max flex items-center justify-center p-2">
        <Skeleton className="h-[300px] w-[300px] rounded-full p-2 bg-slate-800"/>
        </div>
        </>
    }
    return(
   <div className='p-3 flex justify-center items-center relative h-[500px] flex-col text-stone-900'>
      {/* <h1 className='text-white mt-6 text-3xl'>Your Spend Statistics</h1> */}
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel2' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextOffset={0}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsOffset={-21}
        arcLinkLabelsDiagonalLength={36}
        arcLinkLabelsStraightLength={8}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsRadiusOffset={0.55}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                itemTextColor:"white",
                direction: 'row',
                justify: false,
                translateX: -2,
                translateY: 70,
                itemWidth: 95,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 23,
                itemDirection: 'left-to-right'
            }
        ]}
    />
</div>
)}

export default MyResponsivePie
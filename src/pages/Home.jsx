import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
       const navigate =  useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
         dispatch(setTrainerName(e.target.trainerName.value))
         navigate("/pokedex")
    }



  return (
    <main className="h-screen grid grid-rows-[1fr_auto]">
        <section className="grid justify-center items-center text-center">
            <div>
                <div className="pb-10">
                    <img src="/images/logopokedex.png" alt="" />
                </div>
                    <h3 className="text-red-600 text-4xl font-bold">¡Hi Coach!</h3>
                    <p className="text-[#302F2F] text-xl font-medium">To start, give me your name:</p>
                    <form onSubmit={handleSubmit} className="flex justify-center items-center pt-10">
                        <input className='bg-white [box-shadow:_0px_3px_6px_0px_rgba(0,0,0,0.15)] h-[40px] text-xl font-normal px-4 min-w-[200px] w-[45%] ' name="trainerName" type="text" placeholder="Your name..."/>
                        <button className="bg-red-500 text-white h-[40px] min-w-[100px] w-[22.5%] text-xl font-medium hover:bg-red-600 ">Start !</button>
                    </form>
            </div>

        </section>
        <footer>
            <div className="bg-red-600 h-16"></div>
            <div className="bg-black h-12 relative">
                <div className="h-[70px] w-[70px] bg-white border-8 border-black rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center">
                    <div className="w-9 h-9 rounded-full bg-slate-700 border-black border-[6px]"></div>
                </div>
            </div>
        </footer>
    </main>
  )
}
export default Home
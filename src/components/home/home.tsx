import { home } from '../../data/index'
import Container from "../../layout/container";

const Home: Function = () => (
    <div className="h-screen w-screen m-0 flex justify-center items-center">
        <Container>
            <div className="rounded-lg bg-black opacity-100 z-10 text-white grid grid-cols-2">
                <img
                    className="h-full m-auto"
                    src={home.imagePath}
                    alt="Banner"/>
                <div className="px-4 flex flex-col justify-center">
                    <div className="mb-6 text-5xl font-bold">{home.name}</div>
                    <div className="mb-4 text-gray-100 text-2xl">{home.designations.join(' | ')}</div>
                    <p className="text-xl text-gray-300 font-extralight">{home.introduction}</p>

                    <div className="mt-5 mb-2 text-xl font-medium">Top Skills:</div>
                    <ul className="list-none">
                        {home.skills.map((item: String, i: Number) => (
                            <li key={`${i}`}
                                className="inline-block mt-1 mb-1 mr-2 px-4 py-1 bg-gray-300
                        text-sm text-gray-800 font-light rounded">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    </div>
)

export default Home
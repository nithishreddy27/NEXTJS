import React from 'react'
import styles from '../../styles/Home.module.css'
import { demoResume } from '../../lib/data'
import { INTERNALS } from 'next/dist/server/web/spec-extension/request'
import Head from 'next/head'
import Link from 'next/link'

export default function two() {
    const resume=demoResume()
  return (
    <div className={styles.container}>
        <Head>
            <title>Create next app</title>
            <meta name="description" content="generated by create next app"></meta>
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
        </Head>
        <main className={styles.main}>
            <div className="container w-[210mm] h-[297mm] min-w-[210mm] bg-white text-black">
                <div className="first w-[210mm] h-[45mm] mt-5 bg-zinc-300 flex">
                    <div className="name font-serif">
                        <h1 className="text-4xl font-semibold px-10 pt-10">{resume.personal.firstName}<span className="font-normal pl-2"> {resume.personal.lastName}</span></h1>
                        <h2 className="text-xl px-10 pt-5 font-sans font-medium">{resume.personal.role}</h2>
                    </div>
                    <div className="photo">
                    <div className="pl-[80px] pt-16 ml-20">
                        <img src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0" className="w-[130px] h-[130px] rounded-full"></img>
                        </div>
                    </div>
                </div>
                <div className="second flex">
                    <div className="side1 w-[85mm]"> 
                        <div className="contact  border-b-2 border-r-2 border-gray-500 mx-6 mt-5">
                            <div className="dob pl-10 pt-1"><i className='bx bxs-calendar pr-4 text-lg'></i><span className="text-base relative bottom-[3px]">{resume.personal.dob}</span></div>
                            <div className="phone pl-10 pt-1"><i className='bx bxs-phone pr-4 text-lg'></i><span className="text-base relative bottom-1">{resume.personal.phone}</span></div>
                            <div className="mail pl-10 pt-1"><i className='bx bxs-envelope pr-4 text-lg'></i><span className="text-base relative bottom-1">{resume.personal.email}</span></div>
                            <div className="social pl-10 pt-1 flex">
                                {resume.social.map(item=>(
                                    <div className="pr-2">
                                    <span>
                                        <Link href={item.url}>
                                            <img src={"https://www."+item.network+".com/favicon.ico"} className="w-5 grayscale-[40%]">
                                            </img>
                                        </Link>
                                    </span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                        </div>
                        <div className="education border-b-2 border-r-2 border-gray-500 mx-6">
                            <div className="pb-2">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-5">E D U C A T I O N</h2>
                            {
                                resume.education.map(item=>(
                                    <p className="pl-10 pr-5 pt-2"><span className="font-medium">{item.institution}</span> in <span className="font-medium">{item.fieldOfStudy}<br/>({item.startDate} to {item.endDate})</span><br/><i class='bx bxs-graduation'></i> {item.typeOfDegree} in {item.fieldOfStudy} ({item.gpa})</p>
                                ))
                            }
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                        </div>
                        <div className="certifications border-r-2 border-b-2 border-gray-500 mx-6">
                            <div className="pb-2">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-3">C E R T I F I C A T I O N S</h2>
                            {
                                resume.certifications.map(item=>(
                                    <p className="pl-10 pr-2 pb-1"><i className='bx bxs-square text-xs pr-3'></i>{item.title} from {item.issuer}</p>
                                ))
                            }
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                        </div>
                        <div className="skills border-r-2 border-gray-500 mx-6">
                            <div className="pl-10 pb-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">S K I L L S</h2>
                            {
                                resume.skills.map(item=>(
                                    <span className="pr-2">{item.name} </span>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    <div className="side2 w-[125mm]">
                    <div className="career-objective border-b-2 border-gray-500 ml-[-24px] mr-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-8">C A R E E R  O B J E C T I V E</h2>
                            <p className="pl-10 pr-5 pt-3 pb-3">{resume.objective}</p>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                    </div>
                    <div className="experience border-b-2 border-gray-500 ml-[-24px] mr-5">
                    <h2 className="text-center text-xl font-serif font-medium underline pt-3">E X P E R I E N C E</h2>
                        <div className="pb-5">
                            {
                                resume.work.map(item=>(
                                    <p className="pl-10 pr-5 pt-2"><span class="font-medium text-lg pr-3">{item.designation} in {item.company}</span><br></br>({item.from} to {item.to})<br/><Link href={item.website}>{item.website}</Link><br></br></p>
                                ))
                            }
                        </div>
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                    </div>
                    <div className="projects border-b-2 border-gray-500 ml-[-24px] mr-5">
                        <h2 className="text-center text-xl font-serif font-medium underline pt-3">P R O J E C T S</h2>
                        <div className="pb-3">
                            {
                                resume.projects.map(item=>(
                                    <p className="pl-10 pr-5 pt-3"><span className="font-medium text-lg pr-3">{item.name}</span> ({item.from} to {item.to})<br/><Link href={item.website}>{item.website}</Link><br></br></p>
                                ))
                            }
                        </div>
                        <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>

                    </div>
                    <div className="awards border-gray-500 ml-[-24px] mr-5">
                    <h2 className="text-center text-xl font-serif font-medium underline pt-3">A W A R D S</h2>
                            {
                                resume.awards.map(item=>(
                                    <p className="pl-10 pr-5 pt-1"><i className='bx bxs-award pr-1' ></i><span className="font-medium">{item.name}</span> from {item.awarder}</p>
                                ))
                            }
                    </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

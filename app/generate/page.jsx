"use client";
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import Link from 'next/link';
import { useState } from "react";
const page = () => {
  const [URL, setURL] = useState("");
  const [shortenurl, setshortenurl] = useState("");
  const [generated, setgenerated] = useState("");
  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: URL,
      shorten: shortenurl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let r = await fetch("/api/generate", requestOptions)
    let res = await r.json()
    if(res.success){
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortenurl}`)
        toast.info(`${res.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
        setURL("");
        setshortenurl("");
        console.log(res);
      }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="max-w-[600px]  mt-25 backdrop-blur-xl bg-white/5 mx-auto flex justify-center items-center flex-col p-5 rounded-lg space-y-2">
        <h1 className="font-bold text-white text-4xl mb-8 ">
          Generate Your Shorten URL
        </h1>
        <div className="inputs flex flex-col w-full space-y-4 items-center">
          <input
            type="text"
            placeholder="Enter your URL"
            className="w-3/4 text-white py-1.5 px-3 rounded-xl border-1 border-white/50 text-[16px] bg-white/10"
            onChange={(e) => {
              setURL(e.target.value);
            }}
            value={URL}
            name="URL"
          />
          <input
            type="text"
            placeholder="Enter your preferred URL"
            className="w-3/4 text-white py-1.5 px-3 rounded-xl border-1 border-white/50 text-[16px] bg-white/10"
            onChange={(e) => {
              setshortenurl(e.target.value);
            }}
            value={shortenurl}
            name="shortenurl"
          />
          <button
            onClick={generate}
            className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center mx-2 mt-4 w-1/2"
          >
            Submit
          </button>
        </div>
        {generated && (
            <>
                <div className='text-white self-start font-bold mt-2'>
                    <div className='text-lg mb-2'>Generated Link : </div>
                    <Link target='_blank' href={generated} className='text-green-500 mb-1'>{generated}</Link>
                </div>
            </>
        )}
      </div>
      
    </>
  );
};

export default page;

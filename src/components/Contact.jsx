import React from 'react';

function Contacts() {
  return (
    <div className="flex justify-center items-center ">
      <div className=" w-[900px] h-[450px] rounded-[10px] ">
        <hr />
        <h1 className='text-center text-[35px] text-green-400'>Contact me!</h1>
        <hr />
        <div className='flex justify-center items-center text-[15px]'>
          <div className="flex w-[650px]">
            {/* First column */}
            <div className="flex flex-col w-[500px] p-4">
              {/* First row */}
              <div className="flex items-center mb-[40px] mt-[25px] ">
                <img src="img/phone.png" alt="Phone" className="w-10 h-10 mr-2" />
                <p className="text-white">+639217514369</p>
              </div>
              {/* Second row */}
              <div className="flex items-center mb-[40px]">
                <img src="img/email.png" alt="Email" className="w-10 h-10 mr-2" />
                <p className="text-white">kyleanarna@gmail.com</p>
              </div>
              {/* Third row */}
              <div className="flex items-center">
                <img src="img/loc2.png" alt="Location" className="w-10 h-10 mr-2" />
                <p className="text-white">Dasmariñas City, Cavite, Philippines</p>
              </div>
            </div>
            
            {/* Second column */}
            <div className="flex flex-col items-center p-4">
    
              {/* First row */}

              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="d61d6492-ce56-4538-838d-990b8acde643"></input>
                <div className="flex flex-col items-center mb-4">
                  <label htmlFor="name" className="text-white mb-1">Name</label>
                  <input type="text" name="name" required className="rounded-[5px] bg-gray-700 text-white px-4 py-2 w-[250px]" />
                </div>
                {/* Second row */}
                <div className="flex flex-col items-center mb-4">
                  <label htmlFor="email" className="text-white mb-1">Email</label>
                  <input type="email" name="email" required className="rounded-[5px] bg-gray-700 text-white px-4 py-2 w-[250px]" />
                </div>
                {/* Third row */}
                <div className="flex flex-col items-center mb-4">
                  <label htmlFor="message" className="text-white mb-1">Message</label>
                  <textarea name="message" required rows="4" className="rounded-[5px] bg-gray-700 text-white px-4 py-2 w-[250px]"></textarea>
                </div>
                {/* Button */}
                <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                <button type="submit" className="border bg-transparent text-white p-[5px] rounded-[10px] hover:text-green-400  hover:bg-blue-950 hover:border-green-600">Submit!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

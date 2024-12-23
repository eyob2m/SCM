import Nav from "../components/Nav";
import React from 'react'
import Footer from "../components/Footer";

const Notifications = () => {
  return (
    <div className="md:px-[100px] px-2">
      <div className="flex text-[1.6rem] flex-col gap-10">
        <Nav />
        <h1 className="text-[4.7rem]">ማሳወቂያዎች</h1>
        <div className="flex shadow-sm px-10 flex-col gap-4">
          <h3>አስቴር ፖስትህን ላይክ አድርጋለች</h3>
          <h3>ብሩክ በፎቶህ ላይ አስተያየት ሰጥቷል</h3>
          <h3>ኪሩቤል አንተን መከተል ጀመረ</h3>
          <h3>ኪሩቤል አንተን መከተል ጀመረ</h3>
          <h3>አዲስ መልእክት ከሰላማዊት በመልእክት ሳጥንህ ውስጥ አለ</h3>
          <h3>የምትከተለው ቡና አፍቃሪ ቡድን አዲስ ነገር ፖስት አድርጓል</h3>
          <h3>ሰላማዊት አንተን መከተል ጀመረች</h3>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Notifications;

import HeadingCard from "@/components/shared/Card/HeadingCard";
import { Button } from "@/components/ui/button";
import React from "react";
import ClientComponents from "./Components/ClientComponents";

const AnnouncementsPage = () => {
  return (
    <div>
      <HeadingCard title="Live Announcements">
        <div>
          <Button className="bg-indigo-500 hover:bg-indigo-700 rounded-md">
            Post Announcement
          </Button>
        </div>
      </HeadingCard>
      <ClientComponents />
    </div>
  );
};

export default AnnouncementsPage;

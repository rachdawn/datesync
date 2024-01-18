import * as React from "react";
import { useTheme } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab, tabClasses } from "@mui/base/Tab";
import AllDates from "./dashboard-tabs/AllDates";
import UpcomingDates from "./dashboard-tabs/UpcomingDates";
import DraftDates from "./dashboard-tabs/DraftDates";
import PastDates from "./dashboard-tabs/PastDates";

export default function DashboardTabs() {
  return (
    <React.Fragment>
      <Tabs defaultValue={1} className="tabs">
        <TabsList className="CustomTabsList list">
          <Tab className="CustomTab" value={1}>
            All
          </Tab>
          <Tab className="CustomTab" value={2}>
            Upcoming
          </Tab>
          <Tab className="CustomTab" value={3}>
            Drafts
          </Tab>
          <Tab className="CustomTab" value={4}>
            Past
          </Tab>
        </TabsList>
        <TabPanel className="CustomTabPanel panel" value={1}>
          <AllDates />
        </TabPanel>
        <TabPanel className="CustomTabPanel panel" value={2}>
          <UpcomingDates />
        </TabPanel>
        <TabPanel className="CustomTabPanel panel" value={3}>
          <DraftDates />
        </TabPanel>
        <TabPanel className="CustomTabPanel panel" value={4}>
          <PastDates />
        </TabPanel>
      </Tabs>
      <Styles />
    </React.Fragment>
  );
}

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "dark";
}

function Styles() {
  // Replace this with your app logic for determining dark mode
  const isDarkMode = useIsDarkMode();
  return (
    <style>
      {`
      .CustomTabsList {
        text-wrap: nowrap;
        background-color: #9a5997;
        border-radius: 10px;
        // margin: 0 auto;
        // margin-bottom: 12px;
        padding: 0.25rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 6px ${
          isDarkMode ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
        };
      }

      .CustomTab {
        font-family: 'Quicksand', sans-serif;
        color: #e2d1e6;;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        background-color: transparent;
        width: 100%;
        line-height: 1.6;
        padding: 0.5rem;
        margin: 2px;
        border: none;
        border-radius: 8px;
        display: flex;
        justify-content: center;
      }

      .CustomTab:hover {
        text-decoration: overline;
        color: #e2d1e6;
        padding: 0.5rem 
      }

    //   .CustomTab:focus {
    //     color: #e2d1e6;
    //     outline: 1px solid #e2d1e6;
    //   }

      .CustomTab.${tabClasses.selected} {
        background-color: #6a3771;
        color: #e2d1e6;
      }

      .CustomTab.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .CustomTabPanel {
        width: 100%;
        font-family: 'Quicksand', sans-serif;
        font-size: 0.875rem;
        color: #e2d1e6;
        background-color: transparent;
        border-radius: 10px;
        padding: 4px; 
      }
      `}
    </style>
  );
}

import * as React from 'react';
import { useTheme } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import AllDates from './AllDates';
import UpcomingDates from './UpcomingDates';
import DraftDates from './DraftDates';
import PastDates from './PastDates';

export default function DashboardTabs() {
  return (
    <React.Fragment>
      <Tabs defaultValue={1} className="tabs">
        <TabsList className="CustomTabsList">
          <Tab className="CustomTab" value={1}>
            All Dates
          </Tab>
           <Tab className="CustomTab" value={2}>
            Upcoming
          </Tab>
          <Tab className="CustomTab" value={3}>
            Drafts
          </Tab>
          <Tab className="CustomTab" value={4}>
            Past Dates
          </Tab>

        </TabsList>
        <TabPanel className="CustomTabPanel" value={1}>
          <AllDates />
        </TabPanel>
        <TabPanel className="CustomTabPanel" value={2}>
          <UpcomingDates />
        </TabPanel>
        <TabPanel className="CustomTabPanel" value={3}>
         <DraftDates />
        </TabPanel>
        <TabPanel className="CustomTabPanel" value={4}>
          <PastDates />
        </TabPanel>
      </Tabs>
      <Styles />
    </React.Fragment>
  );
}

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

function Styles() {
  // Replace this with your app logic for determining dark mode
  const isDarkMode = useIsDarkMode();
  return (
    <style>
      {`
      .CustomTabsList {
        text-wrap: nowrap;
        background-color: #d8bfd8;
        border-radius: 10px;
        margin-bottom: 12px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: space-evenly;
        box-shadow: 0px 4px 6px ${
          isDarkMode ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
        };
      }

      .CustomTab {
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        color: #662d91;;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: bold;
        background-color: transparent;
        width: 100%;
        line-height: 1.7;
        padding: 6px;
        margin: 2px;
        border: none;
        border-radius: 8px;
        display: flex;
        justify-content: center;
      }

      .CustomTab:hover {
        text-decoration: overline;
        color: #662d91;
        padding: 0.5rem 
      }

      .CustomTab:focus {
        color: #fff;
        outline: 1px solid #fff;
      }

      .CustomTab.${tabClasses.selected} {
        background-color: #662d91;
        color: #d8bfd8;
      }

      .CustomTab.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .CustomTabPanel {
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        color: #662d91;
        background-color: #662d91;
        border-radius: 10px;
        padding: 4px; 
      }
      `}
    </style>
  );
}
import React from 'react';
import {
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
  FaChevronDown
} from "react-icons/fa";

export const SideBar = () => <div className="sidebar" data-testid="sidebar">
	<ul className="sidebar_generic">
		<li>
			<span><FaInbox /></span><span>Inbox</span>
		</li>
		<li>
			<span><FaRegCalendar /></span><span>Today</span>
		</li>
		<li>
			<span><FaRegCalendarAlt /></span><span>Next 7 Days</span>
		</li>
	</ul>
	<div className="sidebar__middle">
		<span><FaChevronDown /></span>
		<h2>Projects</h2>
	</div>
	<ul className="sidebar__projects">Projects will be here</ul>
	Add project component
</div>

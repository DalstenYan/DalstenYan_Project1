-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2024 at 10:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfoliorequests`
--

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(600) NOT NULL,
  `Request_Type` varchar(30) NOT NULL,
  `Request_Date` date DEFAULT current_timestamp(),
  `Request_Status` varchar(40) DEFAULT 'Queued'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`ID`, `Name`, `Description`, `Request_Type`, `Request_Date`, `Request_Status`) VALUES
(1, 'Johnny', 'A basic and plain banking app without too much polish.', 'Front-End Job', '2024-11-20', 'Queued'),
(2, 'Hope', 'Can you remake flappy bird?', 'Video Game Job', '2024-11-21', 'Queued'),
(3, 'Gabe Newell', 'Please make a website for Steam and our upcoming Christmas sale. It must be able to process orders efficiently, and can scale well on mobile devices. Additionally, make sure to add little animations and lots of bells and whistles so that our customers feel welcomed, and also just reward those who check out the site. Thank you.', 'Full Stack', '2024-11-21', 'Queued'),
(23, 'Matthew', 'Hey! Please make a mashup between Minecraft, Breath of the Wild, and also Skyrim! I think that would be a pretty cool idea and make a really fun game!', 'Video Game Job', '2024-11-22', 'Queued'),
(66, 'tester2', 'this is a test description for debugging purposes. I left it in for modification purposes, such as deleting it with the delete function or updating with the update function.', 'Front-End Job', '2024-11-27', 'Queued');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

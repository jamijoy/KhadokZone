-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2020 at 08:17 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jamidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `companyName` varchar(30) NOT NULL,
  `jobTitle` varchar(30) NOT NULL,
  `jobLocation` varchar(30) NOT NULL,
  `salary` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`companyName`, `jobTitle`, `jobLocation`, `salary`) VALUES
('BizzBond', 'Asst. Prof. Manager', 'Dhanmondi', 25000),
('MediaSoft', 'Data Load Engr.', 'Kawran Bazar', 30000),
('BizzBond', 'Software Quality Assr. Officer', 'Dhanmondi', 45000),
('MediaSoft', 'Sr. Additive Engg.', 'Kawran Bazar', 50000);

-- --------------------------------------------------------

--
-- Table structure for table `khadokfoods`
--

CREATE TABLE `khadokfoods` (
  `Fid` int(10) NOT NULL,
  `Rid` int(10) NOT NULL,
  `Fname` varchar(30) NOT NULL,
  `Fdes` varchar(30) NOT NULL,
  `Fprice` double(10,2) NOT NULL,
  `Ftype` varchar(10) NOT NULL,
  `Fstar` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `khadokfoods`
--

INSERT INTO `khadokfoods` (`Fid`, `Rid`, `Fname`, `Fdes`, `Fprice`, `Ftype`, `Fstar`) VALUES
(11111, 1111, 'Basmati Kacchi', 'Platter for 1', 230.00, 'launch', 5),
(11112, 1111, 'Khasir Polao', 'Platter for 3 and compact pr', 550.00, 'launch', 3),
(11113, 1112, 'Awesome Khadok', 'Platter for 3', 890.00, 'launch', 5),
(11114, 1113, 'Lime Juice', 'Lemoned Greened', 80.00, 'drink', 4);

-- --------------------------------------------------------

--
-- Table structure for table `khadokrestaurants`
--

CREATE TABLE `khadokrestaurants` (
  `Rid` int(10) NOT NULL,
  `Rname` varchar(30) NOT NULL,
  `Rloc` varchar(30) NOT NULL,
  `Rstar` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `khadokrestaurants`
--

INSERT INTO `khadokrestaurants` (`Rid`, `Rname`, `Rloc`, `Rstar`) VALUES
(1111, 'Kacchi Vai', 'Bashundhara Gate R/A', 4),
(1112, 'Mughal Empire', 'Dhanmondi', 5),
(1113, 'Chilox', 'Mohakhali', 3);

-- --------------------------------------------------------

--
-- Table structure for table `khadokreviews`
--

CREATE TABLE `khadokreviews` (
  `Uid` int(10) NOT NULL,
  `Fid` int(10) NOT NULL,
  `Uname` varchar(30) NOT NULL,
  `review` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `khadokreviews`
--

INSERT INTO `khadokreviews` (`Uid`, `Fid`, `Uname`, `review`) VALUES
(112, 1112, 'estiak', 'Awesome lagse khabar ta, joss'),
(113, 1113, 'jami', 'onkkk thanda silo');

-- --------------------------------------------------------

--
-- Table structure for table `khadokusers`
--

CREATE TABLE `khadokusers` (
  `Uid` int(10) NOT NULL,
  `Uname` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Utype` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `khadokusers`
--

INSERT INTO `khadokusers` (`Uid`, `Uname`, `Password`, `Utype`) VALUES
(111, 'admin', 'admin', 'admin'),
(112, 'estiak', 'estiak', 'member'),
(113, 'jami', 'jami', 'member'),
(114, 'tanmoy', 'tanmoy', 'member');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `contact` int(12) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `mail`, `companyName`, `contact`, `userName`, `password`) VALUES
(1, 'admin', 'admin@jobHorizon.com', 'JobHorizon', 111, 'admin', 'admin'),
(9, 'estaik', 'estiak@BizzBond.com', 'BizzBond', 1894567345, 'estiak', 'estiak'),
(10, 'ManasDatta', 'manas@MediaSoft.com', 'MediaSoft', 1532456908, 'manas', 'manas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`jobTitle`);

--
-- Indexes for table `khadokfoods`
--
ALTER TABLE `khadokfoods`
  ADD PRIMARY KEY (`Fid`);

--
-- Indexes for table `khadokrestaurants`
--
ALTER TABLE `khadokrestaurants`
  ADD PRIMARY KEY (`Rid`);

--
-- Indexes for table `khadokusers`
--
ALTER TABLE `khadokusers`
  ADD PRIMARY KEY (`Uid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `khadokfoods`
--
ALTER TABLE `khadokfoods`
  MODIFY `Fid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11115;
--
-- AUTO_INCREMENT for table `khadokrestaurants`
--
ALTER TABLE `khadokrestaurants`
  MODIFY `Rid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1114;
--
-- AUTO_INCREMENT for table `khadokusers`
--
ALTER TABLE `khadokusers`
  MODIFY `Uid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

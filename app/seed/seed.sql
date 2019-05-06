-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 13, 2013 at 04:40 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

--
-- Database: `collegeData`
--

-- --------------------------------------------------------

--
-- Table structure for table `lecturerTable`
--

CREATE TABLE `lecturer` (
  `staff_id` int(6) NOT NULL,
  `lecturer_name` varchar(20) NOT NULL,
  `course_id` varchar(50) NOT NULL,
  `lecturer_email` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL
  PRIMARY KEY (`staff_id`)
);

--
-- Dumping data for table `lecturerTable`
--

INSERT INTO `lecturer` VALUES(123001, 'Charlie Cullen', '11101,11102', 'charlie@here.com','inactive');
INSERT INTO `lecturer` VALUES(123002, 'Hugh McAtamney', '11101,11102', 'hugh@there.com','inactive');
INSERT INTO `lecturer` VALUES(123003, 'Keith Gardiner', '11101', 'keith@there.com','inactive');
INSERT INTO `lecturer` VALUES(123004, 'Paula McGloin','11102,11103', 'paula@there.com','inactive');
INSERT INTO `lecturer` VALUES(123005, 'James Wogan', '11102,11103', 'james@there.com','inactive');

-- --------------------------------------------------------

--
-- Table structure for table `moduleTable`
--

CREATE TABLE `module` (
  `module_id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `course_id` varchar(50) NOT NULL,
  `credits` int(2) NOT NULL,
  `website` varchar(30) NOT NULL,
  `due_date` date NOT NULL,
  `location` varchar(25) NOT NULL,
  `room` varchar(10) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  PRIMARY KEY (`module_id`)
);

--
-- Dumping data for table `moduleTable`
--

INSERT INTO `module` VALUES(999001, 'Dynamic Web Development','11101,11102', 15, 'www.dynWeb.ie', '2019-05-14' ,'Aungier Street', '4037', '53.338545', '-6.26607');
INSERT INTO `module` VALUES(999002, 'Human Computer Interaction','11101,11102', 10, 'www.hci.ie', '2019-04-09', 'Aungier Street', '2005', '53.338545' ,'-6.26607');
INSERT INTO `module` VALUES(999003, 'Introduction to Programming','11101,11101', 15, 'www.jscriptIntro.ie' ,'2019-01-11' ,'Kevin Street', '1045',' 53.337015' ,'-6.267933');
INSERT INTO `module` VALUES(999004, 'Design Principles','11103,11102', 15, 'www.designIntro.ie', '2019-04-25', 'Bolton Street' ,'0130', '53.351406' ,'-6.268724');
INSERT INTO `module` VALUES(999005, 'Design Practice','11103,11102', 10, 'www.designPract.ie', '2019-01-11' ,'Cathal Brugha Street', '0123', '53.352044', '-6.259514');
INSERT INTO `module` VALUES(999006, 'Digital Audio','11103,11102', 10, 'www.dspAudio.com' ,'2019-05-10', 'Aungier Street', '3025', '53.338545', '-6.26607');
INSERT INTO `module` VALUES(999007, 'Digital Signal Processing','11101,11102', 10, 'www.dspGeneral.ie', '2019-04-04' ,'Kevin Street', '2103', '53.337015' ,'-6.267933');
INSERT INTO `module` VALUES(999008, 'History of Digital Media','11101,11102', 5, 'www.itsbeendone.ie', '2019-03-28', 'Aungier Street', '0120', '53.338545', '-6.26607');
INSERT INTO `module` VALUES(999009, 'Digital Asset Management','11103,11101', 5, 'www.contentStore.ie' ,'2019-05-30', 'Bolton Street', '1004', '53.351406', '-6.268724');
INSERT INTO `module` VALUES(999010, 'Production Skills','11101,11102', 10, 'www.webDevPro.ie', '2019-04-02', 'Aungier Street', '1089', '53.338545', '-6.26607');

-- --------------------------------------------------------


--
-- Table structure for table `moduleTable`
--

CREATE TABLE `course` (
  `course_id` int(5) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`course_id`)
);

--
-- Dumping data for table `moduleTable`
--

INSERT INTO `course` VALUES(11101, 'MSc Cloud computing');
INSERT INTO `course` VALUES(11102, 'MSc Creative digital media');
INSERT INTO `course` VALUES(11103, 'MSc Data analytics');

-- --------------------------------------------------------

--
-- Table structure for table `moduleTable`
--

CREATE TABLE `time_table` (
  `time_table_id` int(5) NOT NULL,
  `week` TEXT NOT NULL,
  `day` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `module_id` int(6) NOT NULL,
  PRIMARY KEY (`time_table_id`)
);

--
-- Dumping data for table `moduleTable`
--

INSERT INTO `time_table` VALUES(1, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Monday', '2:00 pm', 999001);
INSERT INTO `time_table` VALUES(2, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Thursday', '5:00 pm', 999002);
INSERT INTO `time_table` VALUES(3, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Tuesday', '2:00 pm', 999003);
INSERT INTO `time_table` VALUES(4, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Monday', '2:00 pm', 999004);
INSERT INTO `time_table` VALUES(5, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Wednesday','1:00 pm', 999005);
INSERT INTO `time_table` VALUES(6, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Monday', '2:00 pm', 999006);
INSERT INTO `time_table` VALUES(7, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Tuesday', '3:00 pm', 999007);
INSERT INTO `time_table` VALUES(8, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Wednesday','2:00 pm', 999008);
INSERT INTO `time_table` VALUES(9, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Thursday', '8:00 pm', 999009);
INSERT INTO `time_table` VALUES(10, '1,3,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52','Friday','2:00 pm', 999010);

-- --------------------------------------------------------



--
-- Table structure for table `studentTable`
--

CREATE TABLE `student` (
  `student_id` int(6) NOT NULL,
  `name` varchar(20) NOT NULL,
  `course_id` int(6) NOT NULL,
  `password` BLOB,
  `email` varchar(120) NOT NULL,
  `profile_picture` TEXT NOT NULL
  PRIMARY KEY (`student_id`)
);

--
-- Dumping data for table `studentTable`
--

INSERT INTO `student` VALUES(123, 'Kermit Frog', 11101, AES_ENCRYPT('frog','key_tud_password_encrypt'),'kermit.frog@gmail.com','https://vignette.wikia.nocookie.net/p__/images/3/3c/Kermit_the_Frog.png/revision/latest?cb=20150102173217&path-prefix=protagonist');
INSERT INTO `student` VALUES(124, 'Gonzo Great', 11102, AES_ENCRYPT('great','key_tud_password_encrypt'),'gonzo great@gmail.com','http://illuminarti.weebly.com/uploads/1/6/7/7/16779426/2469582_orig.jpg');
INSERT INTO `student` VALUES(125, 'Cookie Monster', 11103, AES_ENCRYPT('monster','key_tud_password_encrypt'),'cookie.monster@gmail.com','https://cdn3.volusion.com/uuhbg.clmqc/v/vspfiles/photos/00029090-2.jpg?1522302835');

use OlevilleVoting;

CREATE TABLE Election (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	PRIMARY KEY (id)
);

CREATE TABLE Voter (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	electionId INTEGER,
	PRIMARY KEY (id),
	CONSTRAINT FK_voter_electionId FOREIGN KEY (`electionId`) REFERENCES `Election`(`id`)
);

CREATE TABLE Position (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	electionId INTEGER,
	PRIMARY KEY (id),
	CONSTRAINT FK_position_electionId FOREIGN KEY (`electionId`) REFERENCES `Election`(`id`)
);

CREATE TABLE Candidate (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(5000),
	positionId INTEGER,
	electionId INTEGER,
	PRIMARY KEY (id),
	CONSTRAINT FK_candidate_positionId FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`),
	CONSTRAINT FK_candidate_electionId FOREIGN KEY (`electionId`) REFERENCES `Election`(`id`)
);

CREATE TABLE Vote (
	id INTEGER NOT NULL AUTO_INCREMENT,
	candidateId INTEGER,
	voterId INTEGER,
	electionId INTEGER,
	positionId INTEGER,
	PRIMARY KEY (id),
	CONSTRAINT FK_vote_candidateId FOREIGN KEY (`candidateId`) REFERENCES `Candidate`(`id`),
	CONSTRAINT FK_vote_voterId FOREIGN KEY (`voterId`) REFERENCES `Voter`(`id`),
	CONSTRAINT FK_vote_electionId FOREIGN KEY (`electionId`) REFERENCES `Election`(`id`),
	CONSTRAINT FK_vote_positionId FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`)
);

CREATE TABLE VoterGroup (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	PRIMARY KEY (id)
);

CREATE TABLE VoterGroupAssoc (
	voterId INTEGER,
	voterGroupId INTEGER,
	CONSTRAINT FK_voterGroupAssoc_voterId FOREIGN KEY (`voterId`) REFERENCES `Voter`(`id`),
	CONSTRAINT FK_voterGroupAssoc_voterGroupId FOREIGN KEY (`voterGroupId`) REFERENCES `VoterGroup`(`id`)
);

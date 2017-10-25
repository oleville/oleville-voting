use OlevilleVoting_development;

INSERT INTO `OlevilleVoting_development`.`Election`
(`name`,
`startDateTime`,
`endDateTime`,
`createdAt`,
`updatedAt`,
`isRankChoice`)
VALUES
(
'Testing Election',
now(),
date_add(now(), INTERVAL 1 DAY),
now(),
now(),
FALSE);

INSERT INTO `OlevilleVoting_development`.`UserGroup`
(
`name`,
`createdAt`,
`updatedAt`)
VALUES
(
'Test UserGroup 1',
now(),
now());

INSERT INTO `OlevilleVoting_development`.`UserGroup`
(
`name`,
`createdAt`,
`updatedAt`)
VALUES
(
'Test UserGroup 2',
now(),
now());

INSERT INTO `OlevilleVoting_development`.`Position`
(
`name`,
`description`,
`createdAt`,
`updatedAt`,
`electionId`,
`userGroupId`)
VALUES
(
'President',
'The president',
now(),
now(),
1,
1);

INSERT INTO `OlevilleVoting_development`.`Position`
(
`name`,
`description`,
`createdAt`,
`updatedAt`,
`electionId`,
`userGroupId`)
VALUES
(
'Vice President',
'The vice president',
now(),
now(),
1,
1);

INSERT INTO `OlevilleVoting_development`.`Candidate`
(
`name`,
`description`,
`createdAt`,
`updatedAt`,
`electionId`,
`positionId`)
VALUES
(
'Elijah',
'A presidential candidate',
now(),
now(),
1,
1);

INSERT INTO `OlevilleVoting_development`.`Candidate`
(
`name`,
`description`,
`createdAt`,
`updatedAt`,
`electionId`,
`positionId`)
VALUES
(
'Erich',
'A presidential candidate',
now(),
now(),
1,
1);

INSERT INTO `OlevilleVoting_development`.`Candidate`
(
`name`,
`description`,
`createdAt`,
`updatedAt`,
`electionId`,
`positionId`)
VALUES
(
'Nicholas',
'A vice presidential candidate',
now(),
now(),
1,
2);

INSERT INTO `OlevilleVoting_development`.`Candidate`
(
`name`,
`description`,
`createdAt`,
`updatedAt`,
`electionId`,
`positionId`)
VALUES
(
'Kris',
'A vice presidential candidate',
now(),
now(),
1,
2);

INSERT INTO `OlevilleVoting_development`.`UserGroup`
(
`name`,
`createdAt`,
`updatedAt`)
VALUES
(
'First UserGroup',
now(),
now());

INSERT INTO `OlevilleVoting_development`.`UserGroup`
(
`name`,
`createdAt`,
`updatedAt`)
VALUES
(
'Second UserGroup',
now(),
now());

INSERT INTO `OlevilleVoting_development`.`User`
(
`name`,
`username`,
`email`,
`createdAt`,
`updatedAt`,
`electionId`,
`authToken`,
`tokenExpiration`)
VALUES
(
'Elijah Verdoorn',
'verdoo1',
'verdoo1@stolaf.edu',
now(),
now(),
1,
'1',
date_add(now(), INTERVAL 1 DAY));

INSERT INTO `OlevilleVoting_development`.`UserGroupMembership`
(
`createdAt`,
`updatedAt`,
`userId`,
`userGroupId`)
VALUES
(
now(),
now(),
1,
1);


/* getRankChoiceWinner(votes, totalVotes) {
 * 	candidateIds[]
 * 	foreach (vote in votes)
 * 	if (vote.candidateId not in candidateIds)
 * 		candidateIds.append(vote.candidateId)
 * 	candidates[]
 * 	foreach (candidateId in candidateIds)
 * 	candidates.append({candidateId: candidateId, voteCount: -1})
 * 	return getRankChoiceWinner(votes, totalVotes, candidates)
 * }
 *
 * getRankChoiceWinner(votes, totalVotes, remainingCandidates) {
 * 	topVotes = votes.filter(choiceNumber == 1) // only want top choices
 * 	foreach (vote in votes)
 * 	candiates[arraySearch(candidates, vote.candidateId)].voteCount++
 * 						 remainingCandidates.arSort() // reverse ascending sort
 * 	if (candidate[0].voteCount / totalVotes >= .5)
 * 		return remainingCandidates[0].candidateId
 * 	lowestCandidateId = remainingCandidates[remainingCandidates.length - 1].candidateId
 * 	remainingCandidates.delete(arraySearch(remainingCandidates, lowestCandidateId))
 * 	// no winner this round, go to next round
 * 	foreach (vote in topVotes)
 * 	if (vote.candidateId = lowestCandidateId)
 * 		foreach (thisVoterLaterChoiceVote in votes.filter(voterId == vote.voterId))
 * 	thisVoterLaterChoiceVote.choiceNumber--
 * 											votes.delete(arraySearch(votes, vote.id))
 * 	return getRankChoiceWinner(votes, totalVotes, remainingCandidates)
 * }
 * foreach (position in positions)
 * votes = resultOf("SELECT *
 * FROM Votes v
 * WHERE v.positionId = $position.id$ AND v.electionId = $election.id$;")
 *
 * position.winnerId = getRankChoiceWinner(votes, votes.length)'
 */

export default function getRcvResults(election) {
}

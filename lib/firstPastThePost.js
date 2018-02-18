/* foreach (position in positions)
 * position.winnerId = resultOf("SELECT v.CandidateId
 *
 * FROM Votes v
 * WHERE v.positionId = $position.id$ AND v.ElectionId = $election.id$
 * GROUP BY v.candidateId
 * ORDER BY count(*)
 * DESC LIMIT 1;")
 *
 * position.winnerName = resultOf("SELECT c.Name
 *
 * FROM Candidates c
 * WHERE c.id = $position.winnerId$
 * LIMIT 1;")
 */

export default function getFptpResults(election) {
}

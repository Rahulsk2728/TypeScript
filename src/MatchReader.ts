import { CSVFileReader } from './CSVFileReader.js';
import { MatchResult } from './MatchResult.js';
import { dateStringToDate } from './utils.js';



export class MatchReader extends CSVFileReader<MatchData>{

mapRow( row: string[]): MatchData {
    return[
         dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
    ];
 }
}
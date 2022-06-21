import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';

type Data = { name: string }[];
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projectNames = fs.readdirSync('components/containers/projects/data');
  const projects = (
    await Promise.all(
      projectNames.map(
        (projectName) =>
          import(
            `/components/containers/projects/data/${projectName}/en/meta.json`
          )
      )
    )
  ).map((object, index) => ({ name: projectNames[index], ...object.default }));

  res.status(200).json(projects);
}

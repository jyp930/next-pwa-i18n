import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import { Project } from '../../../types/project';

type Data = Project[];

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
            `/components/containers/projects/data/${projectName}/ko/meta.json`
          )
      )
    )
  ).map((object, index) => ({ name: projectNames[index], ...object.default }));

  res.status(200).json(projects);
}

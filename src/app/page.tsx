// index

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <Container>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Est ipsum sapien
        eleifend nisi mi cubilia fames suscipit vel. Condimentum eu fringilla,
        nec cubilia placerat faucibus. Auctor eleifend lacinia lacus nulla etiam
        litora facilisi class gravida. Ligula ultricies at ipsum nisl vel
        nostra. Mi finibus lacinia hendrerit morbi sapien laoreet risus.
        Lobortis nullam maximus risus, curae rutrum ultricies. Maecenas vivamus
        conubia per luctus, ante aliquet inceptos nibh. Potenti morbi fames
        magna a iaculis litora.
      </p>
      <br />
      <p>
        Cubilia libero euismod, posuere dignissim consectetur facilisis. Sodales
        tortor iaculis ut feugiat mattis eleifend? Magna sapien donec sed
        praesent mi ipsum efficitur. Mus scelerisque morbi tristique pulvinar
        porta commodo. Malesuada mus purus dui varius pulvinar; nisi habitasse.
        Hendrerit curabitur curae porta etiam elementum netus diam at nullam.
      </p>
      <h1>Card Component</h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button buttoncolor="danger">Cancel</Button>
          <Button variant="default" buttoncolor="secondary">
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}

import { useCallback, useEffect, useState } from "react";

type DocumentEventKey = keyof DocumentEventMap;

export function KeyStroke() {
  const [logMap, setLogMap] = useState<{ [key: string]: string[] }>({});

  const createLogHandler = useCallback(
    (eventName: DocumentEventKey): EventListener =>
      (e) => {
        setLogMap((logMap) => {
          const event = e as KeyboardEvent;
          let newLogs;
          if (eventName in logMap) {
            newLogs = [event.key, ...logMap[eventName]];
          } else {
            newLogs = [event.key];
          }
          return {
            ...logMap,
            [eventName]: newLogs,
          };
        });
      },
    []
  );

  useEffect(() => {
    const eventNames: DocumentEventKey[] = ["keydown", "keyup", "keypress"];

    const listeners: [DocumentEventKey, EventListener][] = eventNames.map(
      (eventName) => {
        const listener = createLogHandler(eventName);
        document.addEventListener(eventName, listener);
        return [eventName, listener];
      }
    );

    return () => {
      listeners.forEach(([eventName, listener]) => {
        document.removeEventListener(eventName, listener);
      });
    };
  }, [createLogHandler]);

  return (
    <div>
      <h1 className="text-xl m-2">keystroke demo, try to type something</h1>

      <hr />

      <p className="text-sm text-left m-2">
        In general, if you are dealing with <strong className="text-green-300">textual input</strong>,
        such as capturing user-typed characters or validating input,
        the <strong className="text-green-300">onkeypress</strong> event is typically the most appropriate choice.
      </p>
      <p className="text-sm text-left m-2">
        However, if you need to <strong className="text-blue-300">capture</strong> non-character keys,
        track keyboard state changes,
        or detect key combinations,
        you may need to use <strong className="text-blue-300">onkeydown</strong> or <strong className="text-blue-300">onkeyup</strong>.
      </p>
      <hr/>
      <p className="text-sm  m-2">
        try it by typing following keystroke sequences to observe the difference:<br />
        a<br />
        hold a<br />
        release a<br />
        cmd
      </p>

      <div className="flex justify-around align-center h-[40vh]">
        {Object.entries(logMap).map(([eventName, logs], eventIndex) => (
          <div key={eventIndex} className="m-2 text-left p-2">
            {logs.length > 0 && `-${eventName} log-`}

            {logs.map((log, logIndex) => (
              <div key={logIndex}>
                [{logs.length - logIndex}] {log}
                <br />
              </div>
            ))}
          </div>
        ))}
        {
          Object.values(logMap).flat().length > 0 && (
            <button className="m-2 text-xs h-12" onClick={() => setLogMap({})}>Clear log</button>
          )
        }
      </div>
    </div>
  );
}

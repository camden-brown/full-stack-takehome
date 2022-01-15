import React, { ChangeEvent, useState } from "react";
import { ConvertedUnits, EtherUnitKeys, EtherUnitWei } from "./units.interface";

const Table = () => {
  const exchange = (
    unitFromKey: EtherUnitKeys,
    unitToKey: EtherUnitKeys,
    amount: number
  ): number => {
    return amount * (EtherUnitWei[unitFromKey] / EtherUnitWei[unitToKey] );
  };
  const [unitsState, setUnitsState] = useState<ConvertedUnits>({
    [EtherUnitKeys.wei]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.wei, 1),
    [EtherUnitKeys.kwei]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.kwei, 1),
    [EtherUnitKeys.mwei]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.mwei, 1),
    [EtherUnitKeys.gwei]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.gwei, 1),
    [EtherUnitKeys.microether]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.microether, 1),
    [EtherUnitKeys.milliether]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.milliether, 1),
    [EtherUnitKeys.ether]: exchange(EtherUnitKeys.gwei, EtherUnitKeys.ether, 1),
  });

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    unitFromKey: EtherUnitKeys
  ): void => {
    const amount = parseInt(event.target.value);
    setUnitsState({
      [EtherUnitKeys.wei]: exchange(unitFromKey, EtherUnitKeys.wei, amount),
      [EtherUnitKeys.kwei]: exchange(unitFromKey, EtherUnitKeys.kwei, amount),
      [EtherUnitKeys.mwei]: exchange(unitFromKey, EtherUnitKeys.mwei, amount),
      [EtherUnitKeys.gwei]: exchange(unitFromKey, EtherUnitKeys.gwei, amount),
      [EtherUnitKeys.microether]: exchange(
        unitFromKey,
        EtherUnitKeys.microether,
        amount
      ),
      [EtherUnitKeys.milliether]: exchange(
        unitFromKey,
        EtherUnitKeys.milliether,
        amount
      ),
      [EtherUnitKeys.ether]: exchange(unitFromKey, EtherUnitKeys.ether, amount),
    });
  };
  const unitRows = Object.entries(unitsState).map(([key, wei]: [any, any]) => (
    <tr key={key}>
      <th scope="row">{key}</th>
      <td>
        <input
          value={wei}
          onChange={(event) => onInputChange(event, key)}
          type="number"
        />
      </td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Unit</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>{unitRows}</tbody>
    </table>
  );
};

export default Table;
